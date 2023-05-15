import React from 'react';

function Header() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="http://localhost:8080/">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/10/logo.png"
                                alt=""
                                width={90}
                                height={100}
                            />
                        </a>
                        <b className="text-end">Nguyễn Văn Thành</b>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;