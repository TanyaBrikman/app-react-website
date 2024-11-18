export type PostType = {
    id: number
    message: string
    likesCount: string
}

export type ContactType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type ProfileType = {
    profile: any
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
}

export type UserType = {
    photos: string | any;
    followed: boolean;
    name: string
    id: number
    status: string
}

export type DialogsType = {
    id: number
    ava: string
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type FriendsType = {
    id: number
    ava: string
    name: string
}