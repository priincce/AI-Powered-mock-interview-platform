import React, { ReactNode } from 'react'

// This layout wraps Sign-in and Sign-up.
// We removed the check so users can actually see these pages!
const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="auth-layout">
            {children}
        </div>
    )
}

export default AuthLayout