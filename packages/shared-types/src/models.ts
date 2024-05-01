interface InitialInterface {
    id:number,
    keyword:string,

    createdAt:Date,
    updatedAt:Date,
}


export interface User_Attributes extends InitialInterface{
    username:string,
    email:string,
    hashed_password:string,
    country:string,
    banner:string | null,
    profile_image:string | null;
    steam_id:string | null,
    google_id:string | null,

    tier_id:string,

    last_login:Date,
}

export interface UserTier_Attributes extends InitialInterface{
    name:string
}