import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import EditModal from "./EditModal";


function Job(props) {
    const [modalShow, setModalShow] = useState(false);

    function deleteClick() {
        props.removeJob(props.id)
    }

    return (
        <section>
            <div className="job">
                <div className="job-top">
                    <p><em>Title: </em>{props.title}</p>
                    <Switch {...props} />
                </div>
                <div>
                    <p><em>Company: </em>{props.company}</p>
                    <p><em>Location: </em>{props.location}</p>
                </div>
                <div className="job-bottom">
                    <Button variant="outlined" href={props.link}> Job Listing Link </Button>
                    <div className="job-bottom-icons">
                        <FavoriteIcon />
                        <EditIcon onClick={() => setModalShow(true)}/>
                            <EditModal
                                onEdit={props.updateJob}
                                onHide={() => setModalShow(false)}
                            /> 
                        <DeleteForeverIcon onClick={deleteClick} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Job;