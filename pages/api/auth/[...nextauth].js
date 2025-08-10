import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23licFYqQA9Z1iOCez',
            clientSecret: '71f7f56c710706013828fbfaeeeba7de9eda7cac'
        })
    ]
}



export default NextAuth(authOptions)