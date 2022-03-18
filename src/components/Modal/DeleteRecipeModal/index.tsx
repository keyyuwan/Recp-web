import { Modal } from "../index"
import { ColoredText, ButtonsContainer } from "./styles"

interface DeleteRecipeModalProps {
  isOpen: boolean
  handleClose: () => void
  recipeName: string
}

export function DeleteRecipeModal({
  isOpen,
  handleClose,
  recipeName,
}: DeleteRecipeModalProps) {
  function handleDeleteRecipe() {}

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1>
        Are you sure you want to delete{" "}
        <ColoredText>{recipeName}</ColoredText>?
      </h1>

      <ButtonsContainer>
        <button className="cancel" onClick={handleClose}>
          Cancel
        </button>
        <button className="delete" onClick={handleDeleteRecipe}>
          Delete
        </button>
      </ButtonsContainer>
    </Modal>
  )
}
