import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

export default function OrderForm() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (fileds) => {
    let url = `${process.env.URL_API}/orders/`;
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            company: fileds.company,
            quantity: fileds.quantity,
        }),
      }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.')
        }
        window.history.back()
      }).catch(console.error)
  };

  return (
    <Card body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="company">Company</Label>
          <input
            name="company"
            ref={register({ required: true })}
            placeholder="Company Name"
            className="form-control"
          />
          {errors.company && (
            <small className="text-danger">The field Company is required</small>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <input
            name="quantity"
            type="number"
            ref={register({ required: true })}
            placeholder="Quantity"
            className="form-control"
          />
          {errors.quantity && (
            <small className="text-danger">The field Quantity is required</small>
          )}
        </FormGroup>
        <FormGroup>
          {" "}
          <Button color="primary" size="lg" block className="mt-4" type="submit">
            Create
          </Button>
        </FormGroup>
      </form>
    </Card>
  );
}
