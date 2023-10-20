var sign_up_username  = 'Sabre';
var sign_up_password = 'Gazhal';

var login_username = prompt('ENTER YOUR USERNAME');
var login_password = prompt('ENTER YOUR PASSWORD');

if(sign_up_username == login_username){
  if(sign_up_password == login_password){
  console.log('YEYY YOUR ARE SUCESSFULLY SIGN UP')
    
  }else{
    console.log('ENTER A VALID USERNAME OR PASSWORD');
  }
}else{
    console.log('ENTER A VALID USERNAME OR PASSWORD');
  }