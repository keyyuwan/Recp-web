import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Router from "next/router"
import Link from "next/link"
import Modal from "react-modal"

import { Country } from "../../pages/countries"

import { Container } from "./styles"

interface User {
  id: string
  name: string
  avatar: string
  email: string
}
interface Recipe {
  id: string
  name: string
  image: string
}
interface RecipeCardProps {
  data: Recipe
  countryOwner: Country
  userOwner: User
}

export function RecipeCard({
  data,
  countryOwner,
  userOwner,
}: RecipeCardProps) {
  const { data: session } = useSession()

  useEffect(() => {
    Modal.setAppElement("body")
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    // Modal will only open if user is not authenticated
    if (session) {
      return
    }

    setIsModalOpen(true)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  function handleRedirectToRecipePage() {
    if (!session) {
      return
    }

    Router.push(`/recipes/${data.id}`)
  }

  const recipeOwnerIsUserAuth =
    session?.user?.email === userOwner.email

  return (
    <>
      {/* If user is not authenticated, he can't have access to the
      recipe */}
      <div onClick={handleRedirectToRecipePage}>
        {/* Modal will only open if user is not authenticated */}
        <Container onClick={handleOpenModal}>
          <img src={data.image} alt={data.name} className="food" />
          <div className="card-info">
            <h2>{data.name}</h2>

            <Link href={`/countries/${countryOwner.id}`}>
              <div className="country">
                <img
                  src={countryOwner.image}
                  alt={countryOwner.name}
                />
                <p>{countryOwner.name}</p>
              </div>
            </Link>

            <Link
              href={
                !recipeOwnerIsUserAuth ? `/user/${userOwner.id}` : ""
              }
            >
              <div className="author">
                <img
                  src={userOwner.avatar}
                  alt={userOwner.name}
                  referrerPolicy="no-referrer" // avoids 403 error to user google image
                />
                <p>{userOwner.name}</p>
              </div>
            </Link>
          </div>
        </Container>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h1>You need to authenticate to access the Recipe</h1>
        <button onClick={handleCloseModal}>OK</button>
      </Modal>
    </>
  )
}
