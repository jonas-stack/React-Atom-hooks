import { useAtom } from 'jotai';
import { authFormAtom } from './atoms_LoginForm.ts';

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
    const [authForm, setAuthForm] = useAtom(authFormAtom);

    return (
        <div>
            <h2>Login Form</h2>
            <input
                type="text"
                placeholder="Username"
                value={authForm.username}
                onChange={(e) => setAuthForm({ ...authForm, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={authForm.password}
                onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
            />
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default LoginForm;