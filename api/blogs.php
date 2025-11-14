<?php
require_once 'config.php';

$conn = getDBConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Tüm blogları getir
        if (isset($_GET['id'])) {
            // Tek bir blog getir
            $id = intval($_GET['id']);
            $stmt = $conn->prepare("SELECT * FROM blogs WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows > 0) {
                $blog = $result->fetch_assoc();
                echo json_encode($blog);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Blog bulunamadı']);
            }
            $stmt->close();
        } else {
            // Tüm blogları getir (tarihe göre sıralı)
            $result = $conn->query("SELECT * FROM blogs ORDER BY published_date DESC");
            $blogs = [];
            
            while ($row = $result->fetch_assoc()) {
                $blogs[] = $row;
            }
            
            echo json_encode($blogs);
        }
        break;
        
    case 'POST':
        // Yeni blog ekle veya güncelle
        require_once 'verify_token.php';
        verifyToken();
        
        $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
        $title = $_POST['title'] ?? '';
        $content = $_POST['content'] ?? '';
        
        // Yayınlanma tarihi: Yeni ekleme için otomatik, güncelleme için mevcut tarih korunur
        if ($id > 0) {
            // Güncelleme: Mevcut tarihi al
            $stmt = $conn->prepare("SELECT published_date FROM blogs WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $existingBlog = $result->fetch_assoc();
            $published_date = $existingBlog['published_date'] ?? date('Y-m-d H:i:s');
            $stmt->close();
        } else {
            // Yeni ekleme: Otomatik olarak şu anki tarih/saat
            $published_date = date('Y-m-d H:i:s');
        }
        
        // Görsel yükleme
        $image = null;
        if (isset($_POST['existing_image']) && !empty($_POST['existing_image'])) {
            $image = $_POST['existing_image'];
        }
        
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = UPLOAD_DIR;
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }
            
            // Eğer güncelleme yapılıyorsa eski görseli sil
            if ($id > 0 && $image && file_exists('../public/' . $image)) {
                unlink('../public/' . $image);
            }
            
            $fileExtension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
            $fileName = uniqid() . '.' . $fileExtension;
            $filePath = $uploadDir . $fileName;
            
            $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            if (in_array(strtolower($fileExtension), $allowedExtensions)) {
                if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
                    $image = 'uploads/blogs/' . $fileName;
                }
            }
        }
        
        if ($id > 0) {
            // Güncelleme
            $stmt = $conn->prepare("UPDATE blogs SET title = ?, content = ?, image = ?, published_date = ? WHERE id = ?");
            $stmt->bind_param("ssssi", $title, $content, $image, $published_date, $id);
            
            if ($stmt->execute()) {
                echo json_encode([
                    'success' => true,
                    'message' => 'Blog başarıyla güncellendi'
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'Blog güncellenirken hata oluştu']);
            }
        } else {
            // Yeni ekleme
            $stmt = $conn->prepare("INSERT INTO blogs (title, content, image, published_date) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $title, $content, $image, $published_date);
            
            if ($stmt->execute()) {
                echo json_encode([
                    'success' => true,
                    'id' => $conn->insert_id,
                    'message' => 'Blog başarıyla eklendi'
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'Blog eklenirken hata oluştu']);
            }
        }
        $stmt->close();
        break;
        
    case 'DELETE':
        // Blog sil
        require_once 'verify_token.php';
        verifyToken();
        
        $data = json_decode(file_get_contents('php://input'), true);
        $id = intval($data['id'] ?? 0);
        
        // Görseli sil
        $stmt = $conn->prepare("SELECT image FROM blogs WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $blog = $result->fetch_assoc();
            if ($blog['image'] && file_exists('../public/' . $blog['image'])) {
                unlink('../public/' . $blog['image']);
            }
        }
        $stmt->close();
        
        $stmt = $conn->prepare("DELETE FROM blogs WHERE id = ?");
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'message' => 'Blog başarıyla silindi'
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Blog silinirken hata oluştu']);
        }
        $stmt->close();
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
}

$conn->close();
?>

