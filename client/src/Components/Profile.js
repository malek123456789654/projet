import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get_current } from "../redux/actions/authAction";

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  const client = useSelector((state) => state.authReducer.client);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{client.email}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          happy to be here
        </Card.Subtitle>
        <Card.Text>
          {" "}
          src={client.cover_photo?.url}
          sx=
          {{
            position: "relative",
            width: 150,
            height: 150,
          }}
        </Card.Text>

        <a
          href="#pablo"
          className="font-normal text-lightBlue-500"
          onClick={(e) => e.preventDefault()}
        >
          Show more
        </a>
      </Card.Body>
    </Card>
  );
}
export default Profile;
