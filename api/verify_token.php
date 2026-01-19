<?php
require_once 'config.php';

function verifyToken() {
    // Header'ları okuma - getallheaders() çalışmazsa alternatif yöntem
    $headers = [];
    if (function_exists('getallheaders')) {
        $headers = getallheaders();
    } else {
        // getallheaders() yoksa manuel olarak oku
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $headerName = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))));
                $headers[$headerName] = $value;
            }
        }
    }
    
    // Authorization header'ını bul (farklı formatları kontrol et)
    $token = '';
    if (isset($headers['Authorization'])) {
        $token = $headers['Authorization'];
    } elseif (isset($headers['authorization'])) {
        $token = $headers['authorization'];
    } elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $token = $_SERVER['HTTP_AUTHORIZATION'];
    } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $token = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    }
    
    // Basit token kontrolü (gerçek uygulamada daha güvenli yöntem kullanılmalı)
    if (empty($token)) {
        http_response_code(403);
        echo json_encode(['error' => 'Yetkilendirme gerekli']);
        exit;
    }
    
    // Token'ı decode et ve kontrol et
    $token = str_replace('Bearer ', '', $token);
    $decoded = base64_decode($token);
    $parts = explode(':', $decoded);
    
    if (count($parts) !== 2 || $parts[0] !== ADMIN_USERNAME) {
        http_response_code(403);
        echo json_encode(['error' => 'Geçersiz token']);
        exit;
    }
    
    return true;
}
?>

