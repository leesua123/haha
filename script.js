function pickRandom() {
  const numbers = Array.from({ length: 22 }, (_, i) => i + 1);

  // Fisher-Yates shuffle
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  const selected = numbers.slice(0, 4).sort((a, b) => a - b);
  const resultText = `✨ 오늘의 청소당번: <strong>${selected.join(', ')}번</strong>`;

  Swal.fire({
    title: '✅ 추첨 완료!',
    html: resultText,
    icon: 'success',
    confirmButtonText: '좋아요!',
    background: '#f0f9ff',
    confirmButtonColor: '#3085d6',
    customClass: {
      popup: 'rounded-xl shadow-xl'
    }
  });
}
