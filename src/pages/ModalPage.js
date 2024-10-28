import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        reprehenderit vitae reiciendis pariatur consectetur labore iste, sequi
        quo ipsum, provident quisquam tempore quia distinctio, officia corrupti
        temporibus placeat culpa ipsa dolorem sint delectus porro assumenda
        beatae nemo! Ipsam dolorum, quis voluptatem, culpa similique esse nam
        amet odit totam eos natus, facilis nostrum excepturi aliquam labore
        velit inventore assumenda voluptate architecto consequuntur aperiam
        exercitationem numquam ea? Cum libero voluptatibus rerum asperiores iure
        dolor amet sequi, quaerat nostrum hic non quos reprehenderit voluptatum
        et eveniet reiciendis natus perferendis, omnis explicabo autem neque,
        nemo fugit tenetur! Dignissimos vel sit facilis esse itaque assumenda!
      </p>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
