import React from 'react';


export default function SigninComponent(){
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    return (
        <div id='wrap'>
            <form id="login-form" className="ohouse-login-form" onSubmit={handleSubmit}>
                <h2 className="ohouse-login-form-title">로그인</h2>
                <div className="form-group">
                    <label htmlFor="username">이메일</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    // required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    // required
                    />
                </div>
                <button type="submit" className="ohouse-login-form-button">
                    로그인
                </button>
            </form>
            
        </div>
    );
};

