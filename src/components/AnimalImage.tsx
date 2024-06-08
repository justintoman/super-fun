import { useRecoilValue } from 'recoil'
import { imageHeight } from '../store/atoms'
import { animalImage } from '../store/selectors'

function AnimalImage({ id }: { id: number }) {
	const url = useRecoilValue(animalImage(id))
	const height = useRecoilValue(imageHeight)

	return <img src={url} height={height} />
}

export default AnimalImage
