import { useState } from 'react';
import './App.css';
import FirstComponent_Array from './Components/FirstComponent_Array.tsx';
import SecondComponent_Array from './Components/SecondComponent_Array.tsx';
import Component_LoginForm from './Components/Component_LoginForm.tsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>Edit <code>src/App.tsx</code> and save to reload.</p>
            </header>
            {isLoggedIn ? (
                <>
                    <FirstComponent_Array />
                    <SecondComponent_Array />
                </>
            ) : (
                <Component_LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;