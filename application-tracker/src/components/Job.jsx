import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import EditModal from "./EditModal";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


function Job(props) {
    const [modalShow, setModalShow] = useState(false);

    function deleteClick() {
        props.removeJob(props.id)
    }

    function editClick() {
        props.updateJob(props.id)
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
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button><FavoriteIcon /></Button>
                        <Button>
                            <EditModal 
                                onClick={editClick}
                                changeId={props.id}
                                changeTitle={props.title}
                                changeCompany={props.company}
                                changeLocation={props.location}
                                changeLink={props.link}
                                onEdit={props.saveEdit}
                            />
                        </Button>
                        <Button><DeleteForeverIcon onClick={deleteClick} /></Button>
                    </ButtonGroup>
                        {/* <FavoriteIcon />
                        <EditModal 
                            onClick={editClick}
                            changeId={props.id}
                            changeTitle={props.title}
                            changeCompany={props.company}
                            changeLocation={props.location}
                            changeLink={props.link}
                            onEdit={props.saveEdit}
                        /> 
                        <DeleteForeverIcon onClick={deleteClick} /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Job;