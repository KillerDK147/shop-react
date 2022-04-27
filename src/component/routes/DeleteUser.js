import { getCurrentUser } from "../../services/authService";
import { deleteSeller } from "../../services/sellerService";
import { Button } from "react-bootstrap";
const DeleteUser = () => {
  const Token = localStorage.getItem("x-auth-token");
  if (!Token) {
    return (window.location.href = "/login");
  }

  return (
    <div>
      <h1>Delete User</h1>
      <Button
        onClick={() => {
          const User = getCurrentUser();
          if (!User) {
            return (window.location.href = "/login");
          } else {
            deleteSeller(User._id);
            localStorage.removeItem("x-auth-token");
            console.log("deleted" + User._id);
          }
        }}
      >
        DeleteUser
      </Button>
    </div>
  );
};

export default DeleteUser;
