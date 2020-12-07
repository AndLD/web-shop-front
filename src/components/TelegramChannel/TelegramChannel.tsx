import React from 'react'
import $ from 'jquery'
import './telegramChannel.scss'

type TelegramChannelProps = {
    borderRadius? : string,
    reverse? : boolean,
}

export const TelegramChannel = ({ borderRadius = "0", reverse = false }: TelegramChannelProps) => {
    $( window ).on( "load" , function(){
        if(borderRadius != "0")
            $(".telegram-channel").css("border-radius", borderRadius)
        
        if(reverse == true){

        }
        
    })
    return(
        <div className="telegram-channel d-flex align-items-center">
            <div className="logo-wr">
                <img src="/img/telegram_icon.png" alt=""/>
            </div>
            <div className="link d-flex flex-column">
                <span>Наш канал в Telegram</span>
                <button>Присоединиться {'>'}</button>
            </div>
        </div>
    )
}