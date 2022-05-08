<script>
  import PollStore from "../Stores/PollStore";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Button from "../Shared/Button.svelte";
  let feilds = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;
  const submitHandle = () => {
    valid = true;
    // validation question
    if (feilds.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }
    // validation answer A
    if (feilds.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A cannot be empty.";
    } else {
      errors.answerA = "";
    }
    // validation answer B
    if (feilds.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B cannot be empty.";
    } else {
      errors.answerB = "";
    }

    // add new poll
    if (valid) {
      let poll = { ...feilds, votesA: 0, votesB: 0, id: Math.random() };
      PollStore.update((currPoll) => {
        return [...currPoll, poll];
      });

      dispatch("add");
    }
  };
</script>

<form on:submit|preventDefault={submitHandle}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={feilds.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={feilds.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer A:</label>
    <input type="text" id="answer-b" bind:value={feilds.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="secondary" flat={true} inverse={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
