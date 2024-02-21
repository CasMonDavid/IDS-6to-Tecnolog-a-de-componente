function CustomContrasena({label, disabled}) {
    return (
      <>
        <label htmlFor="">{label}</label>
        <input type="password" disabled={disabled} />
      </>
    );
  }
  
  
  export default CustomContrasena;