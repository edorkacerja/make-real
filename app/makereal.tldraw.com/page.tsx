/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import '@tldraw/tldraw/tldraw.css'
import dynamic from 'next/dynamic'
import {PreviewShapeUtil} from '../PreviewShape/PreviewShape'
import {APIKeyInput} from '../components/APIKeyInput'
import {ExportButton} from '../components/ExportButton'
import OptionPanel from '../components/option-panel/OptionPanel'


import {LinkArea} from '../components/LinkArea'

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
	ssr: false,
})

const shapeUtils = [PreviewShapeUtil]

export default function Home() {
	return (
		<div className="tldraw__editor">
			<OptionPanel />
			<Tldraw persistenceKey="tldraw" shapeUtils={shapeUtils} shareZone={<ExportButton />}>
				<APIKeyInput />
				<LinkArea />
			</Tldraw>
		</div>
	)
}
