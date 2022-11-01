/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * Loading TextControl library for learning how to build a block
 */
import { TextControl, Placeholder } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, isSelected, setAttributes }) {
	const blockProps = useBlockProps();
	return (
		<div {...useBlockProps()}>
			{attributes.question && attributes.reponse && !isSelected ? (
				<div>
					<RichText
						{...blockProps}
						tagName="h2" // Notre question
						value={attributes.question}
						//allowedFormats={["core/bold", "core/italic"]}
						onChange={(question) => setAttributes({ question })} // Store updated content as a block attribute
						placeholder={__("Question...")}
					/>

					<RichText
						{...blockProps}
						tagName="div" // Notre réponse
						value={attributes.reponse}
						//allowedFormats={["core/bold", "core/italic"]} // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={(reponse) => setAttributes({ reponse })} // Store updated content as a block attribute
						placeholder={__("Réponse...")}
					/>
				</div>
			) : (
				<Placeholder
					label={__("Création d'un nouvel élément de la FAQ", "melplugin")}
					instructions={__(
						"Ajoutez votre question puis votre réponse",
						"melplugin"
					)}
				>
					<RichText
						{...blockProps}
						tagName="h2" // Notre question
						value={attributes.question}
						//allowedFormats={["core/bold", "core/italic"]}
						onChange={(question) => setAttributes({ question })} // Store updated content as a block attribute
						placeholder={__("Question...")}
					/>

					<RichText
						{...blockProps}
						tagName="div" // Notre réponse
						value={attributes.reponse}
						//allowedFormats={["core/bold", "core/italic"]} // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={(reponse) => setAttributes({ reponse })} // Store updated content as a block attribute
						placeholder={__("Réponse...")}
					/>
				</Placeholder>
			)}
		</div>
	);
}
