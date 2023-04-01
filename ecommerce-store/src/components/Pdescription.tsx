import React from 'react'

function Pdescription(props : object) {
    if (props.description.length > 100) {
    return props.description.substring(0, 129) + "..."
  } else {
    return props.description;
  }
} 

export default Pdescription;
