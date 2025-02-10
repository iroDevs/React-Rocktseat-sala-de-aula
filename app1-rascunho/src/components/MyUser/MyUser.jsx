import MyUserStyle from './MyUser.module.css';


function MyUser() {
    console.log('MyUser:', MyUserStyle);
  return (
    <>
    <div className={MyUserStyle.box}>
        <h1>MyUser</h1>
        <p>MyUser</p>

    </div>
    </>
  );
}

export default MyUser;