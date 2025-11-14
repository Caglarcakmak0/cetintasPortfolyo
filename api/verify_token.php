<?php
require_once 'config.php';

function verifyToken() {
    $headers = getallheaders();
    $token = $headers['Authorization'] ?? '';
    
    // Basit token kontrolü (gerçek uygulamada daha güvenli yöntem kullanılmalı)
    if (empty($token)) {
        http_response_code(401);
        echo json_encode(['error' => 'Yetkilendirme gerekli']);
        exit;
    }
    
    // Token'ı decode et ve kontrol et
    $decoded = base64_decode(str_replace('Bearer ', '', $token));
    $parts = explode(':', $decoded);
    
    if (count($parts) !== 2 || $parts[0] !== ADMIN_USERNAME) {
        http_response_code(401);
        echo json_encode(['error' => 'Geçersiz token']);
        exit;
    }
    
    return true;
}
?>

