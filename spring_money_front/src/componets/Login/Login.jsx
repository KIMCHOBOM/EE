import Link from 'next/link';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginForm}>
                <div className={styles.loginTop}>
                    <h2 className={styles.mainText}>로그인</h2>
                    <h3 className={styles.subText}>
                        편한가계부에 오신 것을 환영합니다.
                    </h3>
                </div>
                <div className={styles.loginInputForm}>
                    <div className={styles.emailInput}>
                        <input type='text' placeholder='이메일' />
                    </div>
                    <div className={styles.pwdInput}>
                        <input type='password' placeholder='비밀번호' />
                    </div>
                    <div className={styles.idSaveBtn}>
                        <input type='checkbox' name='idSave' id='idSave' />
                        <label htmlFor='idSave'>로그인 상태 유지</label>
                    </div>
                </div>
                <div>
                    <div>
                        <button className={styles.loginBtn}>로그인</button>
                    </div>
                    <div>
                        <Link
                            className={`${styles.subText} ${styles.underLine}`}
                            href='/findPw'
                        >
                            비밀번호를 잊으셨나요?
                        </Link>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <span>이용약관</span>
                    <span>개인정보 취급방침</span>
                </div>
            </footer>
        </div>
    );
};

export default Login;
