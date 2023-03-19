import React, { useState, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import EditModal from "./EditModal";
import ButtonGroup from '@mui/material/ButtonGroup';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Job(props) {
    const [modalShow, setModalShow] = useState(false);
    // const [press, setPress] = useState(false);
    // const [favorite, setFavorite] = useState(false);

    function deleteClick() {
        props.removeJob(props.id)
    }

    function editClick() {
        props.updateJob(props.id)
    }

    // function wasPress() {
    //     setPress(prevState => {
    //         prevState = !prevState;
    //     });
    // }

    return (
        <section>
            <div className="job">
                <div className="job-top">
                    <p><em>Title: </em>{props.title}</p>
                    <Checkbox />
                </div>
                <div>
                    <p><em>Company: </em>{props.company}</p>
                    <p><em>Location: </em>{props.location}</p>
                </div>
                <div className="job-bottom">
                    <Button variant="outlined" href={props.link}> Job Listing Link </Button>
                    <div className="job-bottom-icons">
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button><FavoriteIcon color="error"/></Button>
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Job;