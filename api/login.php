<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    
    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        // Basit bir session token oluştur (gerçek uygulamada JWT kullanılmalı)
        $token = base64_encode($username . ':' . time());
        
        echo json_encode([
            'success' => true,
            'token' => $token,
            'message' => 'Giriş başarılı'
        ]);
    } else {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => 'Kullanıcı adı veya şifre hatalı'
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>

