/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { attributes } = props;
	const { blockId } = attributes;
	const idArray = blockId.split("-");
	const id = `faq-${idArray[0]}`;
	const blockProps = useBlockProps.save();

	return (
		<div className="mel-faq-elem">
			<RichText.Content
				{...blockProps}
				tagName="h2"
				value={attributes.question}
				className="mel-faq-elem--question"
				aria-role="button"
				aria-controls={id}
				aria-expanded="false"
			/>

			<RichText.Content
				{...blockProps}
				tagName="div"
				value={attributes.reponse}
				className="mel-faq-elem--reponse"
				id={id}
			/>
		</div>
	);
}
