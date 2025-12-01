import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website acts as a virtual marketplace that enables individuals and businesses to buy and sell products or services over the internet.
                    It allows sellers to display their offerings and interact with customers conveniently, eliminating the need for a physical store.
                    These platforms streamline transactions, offer easy accessibility, and make it possible for businesses to reach a global audience.
                    As a result, e-commerce websites have gained remarkable popularity for their convenience and the broad reach they provide.
                </p>
                <p>E-commerce websites showcase products or services with clear descriptions, images, and prices.
                    Customers can view available variations such as sizes and colors for each item.
                    Dedicated product pages present all essential details to assist shoppers in choosing.
                    This organized layout makes it easy to compare and select the best options online.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox