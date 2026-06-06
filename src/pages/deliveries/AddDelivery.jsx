import ModalsContainer from "../../components/ModalsContainer";

export default function AddDelivery() {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_delivery_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer>
        
      </ModalsContainer>
    </>
  );
}
