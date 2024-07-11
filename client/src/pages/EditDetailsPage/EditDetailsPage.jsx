
const EditDetailsPage = () => {
  return (
    <div>
        <form className="form">
        <label className="form__title sub-header">{selectedItem.name}</label>
        <TextInput name="catogory" label="CATOGORY" placeholder="CATOGORY OF THE ITEM" value={selectedItem.category}/>
        <TextInput name="color" label="COLOR" placeholder="COLOR OF THE ITEM" value={selectedItem.color}/>
        <TextInput name="season" label="SEASON" placeholder="SEASON OF THE ITEM" value={selectedItem.season}/>
        <TextInput name="brand" label="BRAND" placeholder="BRAND OF THE ITEM" value={selectedItem.brand}/>
      </form>
    </div>
  )
}

export default EditDetailsPage
