import React from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css';

const FormComp = ({confirmPurchase, formVis, setFormVis}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (dataDelFormulario) => {
        confirmPurchase(dataDelFormulario)
      }; // your form submit function which will invoke after successful validation

      const handleClose = () => {
        setFormVis(false);
      }
        
      return (
        <>
          <Modal show={formVis} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title><h3>Datos para el Ticket</h3></Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Body className="formulario">

              <label>Nombre</label>
                <input
                  {...register("nombre", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors?.nombre?.type === "required" && <p>El Nombre es obligatorio</p>}
                {errors?.nombre?.type === "minLength" && (
                  <p>El Nombre debe superar los 3 caracteres</p>
                )}

                <label>Apellido</label>
                <input
                  {...register("apellido", {
                    required: true,
                    minLength: 2,
                  })}
                />
                {errors?.apellido?.type === "required" && <p>El Apellido es obligatorio</p>}
                {errors?.apellido?.type === "minLength" && (
                  <p>El Apellido debe superar los 2 caracteres</p>
                )}

                <label>Nick</label>
                <input
                  {...register("nick", {
                    required: true,
                    minLength: 4,
                  })}
                />
                {errors?.nick?.type === "required" && <p>El Nick es obligatorio</p>}
                {errors?.nick?.type === "minLength" && (
                  <p>El Nick debe superar los 4 caracteres</p>
                )}

                <label>Email</label>
                <input type='email' {...register("email", {minLength: 8, required: true})} />
                {errors?.email?.type === "minLength" && (
                  <p>El mail tiene que tener minimo 8 caracteres</p>
                )}
                {errors?.email?.type === "required" && <p>El Email es obligatorio</p>}

                <label>Telefono</label>
                <input type="number" {...register("phone", { minLength: 10, maxLength: 15, required: true })} />
                {errors?.phone?.type === "minLength" && (
                  <p>El teléfono debe ser mayor a 10 y menos que 15</p>
                )}
                {errors?.phone?.type === "required" && <p>El telefono es obligatorio</p>}

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type ="submit">
                  Confirm purchase
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </>

      );
};

export default FormComp;