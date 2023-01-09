export const AlertMessage = (props: {
  message: string;
  setModalIsOpen: Function;
}) => {
  return (
    <div className="alert-message">
      <i
        className="alert-message__close fa fa-close"
        onClick={() => props.setModalIsOpen(false)}
      ></i>
      <p className="alert-message__content">{props.message}</p>
    </div>
  );
};
