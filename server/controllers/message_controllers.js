let controller = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const {text, time} = req.body;
    controller.push({
      id,
      text,
      time 
    }),
    id++,
    res.status(200).send(controller);
  },
  read: (req, res) => {
    res.status(200).send(controller);

  },
  update: (req, res) => {
    const {text} = req.body
    const updateID = req.params.id;
    const controllerIndex = controller.findIndex(controller => controller.id == updateID);
    let controller = controller[controllerIndex]

    controller[controllerIndex] = {
      id: controller.id,
      text: text,
      time: controller.time
    };

    res.status(200).send(controller)
  },
  delete: (req, res) => {
    const deleteID = req.params.id;
    controllerIndex = controller.findIndex(controller => controller.id == deleteID);
    controller.splice(controllerIndex, 1);
    res.status(200).send(controller);
  }
};