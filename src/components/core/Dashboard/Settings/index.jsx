import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccout"
import EditProfile from "./EditProfile"

export default function Settings() {
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
     
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}