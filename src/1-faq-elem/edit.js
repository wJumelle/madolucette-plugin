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
 * Loading Placeholder library for learning how to build a block
 */
import { Placeholder } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import { useEffect } from "react";

export default function Edit(props) {
	const { attributes, isSelected, setAttributes, clientId } = props;
	const { blockId } = attributes;
	const blockProps = useBlockProps();

	useEffect(() => {
		if (!blockId) {
			setAttributes({ blockId: clientId });
		}
	}, []);

	return (
		<div {...useBlockProps()}>
			{attributes.question && attributes.reponse && !isSelected ? (
				<div className="mel-faq-elem">
					<RichText
						{...blockProps}
						tagName="h2" // Notre question
						value={attributes.question}
						onChange={(question) => setAttributes({ question })} // Store updated content as a block attribute
						placeholder={__("Question...")}
					/>

					<RichText
						{...blockProps}
						tagName="div" // Notre réponse
						value={attributes.reponse}
						onChange={(reponse) => setAttributes({ reponse })} // Store updated content as a block attribute
						placeholder={__("Réponse...")}
					/>
				</div>
			) : isSelected ? (
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
						className="mel-faq-elem--question"
						value={attributes.question}
						onChange={(question) => setAttributes({ question })} // Store updated content as a block attribute
						placeholder={__("Question...")}
					/>

					<RichText
						{...blockProps}
						tagName="div" // Notre réponse
						multiline="p"
						className="mel-faq-elem--reponse"
						value={attributes.reponse}
						onChange={(reponse) => setAttributes({ reponse })} // Store updated content as a block attribute
						placeholder={__("Réponse...")}
					/>
				</Placeholder>
			) : (
				<div>C'est probablement ce cas de figure qui pose problème ?</div>
			)}
		</div>
	);
}
