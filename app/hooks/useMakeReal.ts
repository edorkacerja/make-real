import {useEditor, useToasts} from '@tldraw/tldraw'
import {track} from '@vercel/analytics/react'
import {useCallback} from 'react'
import {makeReal} from '../lib/makeReal'
import {useAppSelector} from "../lib/store/hooks";

export function useMakeReal() {
	const editor = useEditor()
	const toast = useToasts()
	const { themeStyle, cssLibrary, typography, layoutStyle, responsiveDesign, navbarLocation } = useAppSelector(state => state.optionPanel);


	return useCallback(async () => {
		const input = document.getElementById('openai_key_risky_but_cool') as HTMLInputElement
		const apiKey = input?.value || "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";

		track('make_real', { timestamp: Date.now() })

		try {
			await makeReal(editor, apiKey, (message) => toast.addToast(message), themeStyle, cssLibrary, layoutStyle, responsiveDesign, navbarLocation, typography)
		} catch (e: any) {
			track('no_luck', { timestamp: Date.now() })

			console.error(e)
			toast.addToast({
				title: 'Something went wrong',
				description: `${e.message.slice(0, 200)}`,
				actions: [
					{
						type: 'primary',
						label: 'Read the guide',
						onClick: () => {
							// open a new tab with the url...
							window.open(
								'https://tldraw.notion.site/Make-Real-FAQs-93be8b5273d14f7386e14eb142575e6e',
								'_blank'
							)
						},
					},
				],
			})
		}
	}, [editor, toast, themeStyle, cssLibrary, layoutStyle, responsiveDesign, navbarLocation, typography])
}
