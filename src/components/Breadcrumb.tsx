import { Home } from "lucide-react";
import { Link } from "react-router-dom";


function Breadcrumb({ title, breadcrumb, image }: { title: string, breadcrumb: { label: string, path?: string }[], image: string }) {
    return (
        <div className="breadcrumb-container">
            <img src={image} alt={title} />
            <div className="breadcrumb-overlay">
                <div className="breadcrumb-content">
                    <h1 className="breadcrumb-title">{title.toUpperCase()}</h1>
                    <div className="breadcrumb-nav">
                        <Link to="/" className="breadcrumb-home-link">
                            <Home className="breadcrumb-home-icon" />
                        </Link>
                        <div className="breadcrumb-separator"></div>
                        {breadcrumb.map((item, index) => (
                            <div key={index} className="breadcrumb-item">
                                {
                                    item.path ?
                                        <Link to={item.path} className="breadcrumb-link">{item.label}</Link>
                                        :
                                        <p className="breadcrumb-text">{item.label}</p>
                                }
                                {index !== breadcrumb.length - 1 && <div className="breadcrumb-separator"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb