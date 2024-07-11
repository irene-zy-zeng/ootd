import TextInput from "../TextInput/TextInput";
import "./ItemDetailsForm.scss"

const ItemDetailsForm = () => {
  return (
      <form className="form">
        <label className="form__title sub-header">Item Detials</label>
        <TextInput name="name" label="NAME" placeholder="NAME OF THE ITEM"/>
        <TextInput name="catogory" label="CATOGORY" placeholder="CATOGORY OF THE ITEM"/>
        <TextInput name="color" label="COLOR" placeholder="COLOR OF THE ITEM"/>
        <TextInput name="season" label="SEASON" placeholder="SEASON OF THE ITEM"/>
        <TextInput name="brand" label="BRAND" placeholder="BRAND OF THE ITEM"/>
      </form>
  )
}

export default ItemDetailsForm
