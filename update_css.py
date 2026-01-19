
import os

try:
    with open('src/index.css', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Adjust paths
    content = content.replace("url('/assets/", "url('assets/")
    
    with open('wordpress-theme/style.css', 'a', encoding='utf-8') as f:
        f.write("\n" + content)
        
    print("CSS appended successfully.")
except Exception as e:
    print(f"Error: {e}")
