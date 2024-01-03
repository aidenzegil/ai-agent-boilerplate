import { LuBook } from "react-icons/lu";
import Form from "../../common/forms/LogIn/component";
import Input from "../../common/inputs/Input/component";
import Button from "../../common/inputs/Button/component";

const Component = () => {
  return (
    <div>
      <LuBook />
      <Form>
        <label>EMAIL</label>
        <Input />
        <label>PASSWORD</label>
        <Input />
        <Button type="submit">Log In</Button>
      </Form>
    </div>
  );
};
export default Component;
