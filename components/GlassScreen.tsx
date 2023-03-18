import clsx from 'clsx'
import { FC } from 'react'

export interface GlassScreenProps {
    children: React.ReactNode
    className?: string
}

const GlassScreen: FC<GlassScreenProps> = ({ children, className }) => {
    return (
        <div
            className={clsx(
                'rounded-2xl border-solid border-2 border-gray-200',
                className
            )}
        >
            {children}
        </div>
    )
}

export default GlassScreen
