import Button from "../../components/Button/Button"
import AddIcon from "../../assets/icons/add.svg";
import SortIcon from "../../assets/icons/sort.svg";

const ClosetPage = () => {
  return (
    <div className="button-container">
      <Button buttonVariant="primary" buttonLabel="Add New Item" buttonIcon={AddIcon} />
      <Button buttonVariant="secondary" buttonLabel="Sort By ..." buttonIcon={SortIcon} />
    </div>
  )
}

export default ClosetPage
