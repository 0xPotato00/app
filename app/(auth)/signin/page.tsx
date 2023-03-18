import AuthForm from '@/components/AuthForm'

export default function SignInPage() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <AuthForm mode="register" />
            </div>
        </div>
    )
}
