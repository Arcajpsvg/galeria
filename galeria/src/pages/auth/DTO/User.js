//clase DTO para usuarios, para relacionarse con el servidor en el componente auth.

export default class UserDTO{
email;
password;

constructor(data){
    this.email = data.email;
    this.password = data.password;
}
}