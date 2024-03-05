import { memo } from 'react'

const Profile = memo(function(props) {
    console.log("Profile render")
    return (
        <h2>Profile: {props.message}</h2>
    )
})

export default Profile