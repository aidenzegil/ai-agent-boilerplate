import { Fields } from "./types";
import s from "./styles.module.scss";

const Component = (fields: Fields) => {
  const {
    message,
    agentResponse,
    agentResponseLoading,
    triggerAgentResponse,
    handleMessageChange,
  } = fields;

  return (
    <div className={s.container}>
      <textarea value={message} onChange={handleMessageChange} />
      <button onClick={triggerAgentResponse}>Send</button>
      {agentResponseLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{agentResponse}</div>
      )}
    </div>
  );
};
export default Component;
