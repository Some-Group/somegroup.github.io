import { createCell, Fragment } from 'web-cell';

export function Hello({ name = 'World' }) {
    return (
        <>
            {' '}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <button type="button" className="btn btn-primary">
                Primary
            </button>
            <button type="button" className="btn btn-secondary">
                Secondary
            </button>
            <button type="button" className="btn btn-success">
                Success
            </button>
            <button type="button" className="btn btn-info">
                Info
            </button>
            <button type="button" className="btn btn-warning">
                Warning
            </button>
            <button type="button" className="btn btn-danger">
                Danger
            </button>
            <button type="button" className="btn btn-link">
                Link
            </button>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
            <h1>Hello, {name}!</h1>
        </>
    );
}
