import { Card,  CardTitle, CardText } from "reactstrap";

const ProcessListItem = ({ process }) => {
  return (
    
      <Card body className="pointer">
        <CardTitle tag="h5"> <strong>Process - </strong> {process.name.replace('_',' ')}</CardTitle>
        <CardText>
          <strong>Quantity - </strong>          
        </CardText>
      </Card>
  );
};



export default ProcessListItem;
